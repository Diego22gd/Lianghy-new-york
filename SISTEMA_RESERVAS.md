# 🤖 MASTER PROMPT EXECUTABLE: Sistema de Reservas & SaaS Multi-Tenant (Beauty & Makeup Studio)

> **INSTRUCCIÓN DE USO**: Este documento es un Master Prompt Autónomo. Copia todo su contenido y pásalo como instrucción inicial a cualquier Agente de Inteligencia Artificial para desarrollar el sistema de reservas completo desde cero o sobre este repositorio.

---

## 🎯 <SYSTEM_ROLE_AND_OBJECTIVE>
Eres un **Lead Full-Stack Architect & Senior Product Engineer**. Tu tarea es construir un **Sistema de Reservas de Alta Gama (Luxury Booking System)** y su infraestructura **SaaS Multi-Tenant** para estudios de maquillaje, peinado y artistas de belleza.

El proyecto se iniciará como el motor de reservas nativo para **Lianghy New York Beauty Studio** (Single-Tenant MVP), pero toda la arquitectura debe ser **100% Multi-Tenant por diseño**, permitiendo que en el futuro múltiples artistas puedan registrarse, configurar sus propios subdominios/dominios, definir servicios, horarios y activar extensiones modulares (plugins) sin modificar el código base.

---

## 🏗️ <ESTRUCTURA_DE_ARCHIVOS_A_CREAR>

Deberás generar la siguiente estructura dentro de la aplicación:

```
app/
├── (booking)/
│   ├── reservas/
│   │   ├── page.tsx                      # Página pública de reserva para clientes
│   │   └── confirmacion/page.tsx         # Página de confirmación y resumen de cita
│   ├── api/
│   │   ├── availability/route.ts         # Endpoint de cálculo de slots de tiempo libres
│   │   ├── bookings/route.ts             # Crear y consultar reservas
│   │   ├── checkout/route.ts             # Generar sesión de Stripe Checkout
│   │   └── webhooks/
│   │       ├── stripe/route.ts           # Webhook para confirmar depósitos de Stripe
│   │       └── whatsapp/route.ts         # Webhook de mensajería
├── (admin)/
│   └── admin/
│       ├── reservas/page.tsx             # Dashboard de administración (Vista Calendario)
│       └── servicios/page.tsx            # Gestión de servicios y precios del tenant
lib/
├── supabase/
│   ├── client.ts                         # Cliente de Supabase Frontend
│   └── server.ts                         # Cliente de Supabase Server Actions/Routes
├── stripe/
│   └── stripe.ts                         # Cliente e integraciones de Stripe
├── notifications/
│   ├── whatsapp.ts                       # Helper API de WhatsApp (Twilio / Meta API)
│   └── email.ts                          # Helper API de Email (Resend)
├── extensions/
│   ├── loader.ts                         # Cargador de extensiones y plugins activas
│   └── plugins/
│       ├── travel-fee.ts                 # Plugin 1: Calculadora de viáticos por Zip Code
│       ├── bridal-party.ts               # Plugin 2: Desglose de damas de honor
│       └── intake-form.ts                # Plugin 3: Cuestionario de piel y alergias
types/
└── booking.ts                            # Definiciones globales de TypeScript
```

---

## 🔑 <VARIABLES_DE_ENTORNO_REQUERIDAS>

Asegúrate de configurar los siguientes valores en `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Notifications (WhatsApp & Email)
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
RESEND_API_KEY=re_...

# App Config
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🗄️ <SCRIPT_BD_POSTGRESQL_SUPABASE>

Ejecuta este SQL completo en Supabase para habilitar las tablas con RLS:

```sql
-- 1. Tabla de Tenants (Estudios / Artistas)
CREATE TABLE IF NOT EXISTS tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  domain VARCHAR(255),
  logo_url TEXT,
  currency VARCHAR(10) DEFAULT 'USD',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabla de Servicios
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration_minutes INT NOT NULL DEFAULT 60,
  price DECIMAL(10,2) NOT NULL,
  deposit_required DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabla de Disponibilidad Horaria
CREATE TABLE IF NOT EXISTS availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  day_of_week INT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  buffer_minutes INT DEFAULT 30,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tipos y Tabla de Reservas
DO $$ BEGIN
    CREATE TYPE booking_status AS ENUM ('pending', 'deposit_paid', 'confirmed', 'completed', 'cancelled');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_status AS ENUM ('unpaid', 'deposit', 'fully_paid');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE location_type AS ENUM ('studio', 'on_location');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  service_id UUID REFERENCES services(id),
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  booking_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status booking_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'unpaid',
  location_type location_type DEFAULT 'studio',
  notes TEXT,
  stripe_payment_intent_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Tabla de Extensiones Modulares por Tenant
CREATE TABLE IF NOT EXISTS tenant_extensions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  extension_key VARCHAR(100) NOT NULL,
  is_enabled BOOLEAN DEFAULT FALSE,
  config JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tenant_id, extension_key)
);

-- SEED INICIAL: Tenant Lianghy New York
INSERT INTO tenants (name, slug, currency)
VALUES ('Lianghy Beauty Studio NYC', 'lianghy', 'USD')
ON CONFLICT (slug) DO NOTHING;
```

---

## 📋 <PLAN_DE_EJECUCION_PASO_A_PASO_PARA_LA_IA>

Ejecuta el proyecto de forma progresiva comprobando la validez de cada fase:

### 🔹 FASE 1: Tipos y Clientes de Supabase
- Generar `types/booking.ts` con todos los tipos TypeScript basados en el esquema de BD.
- Configurar los clientes en `lib/supabase/client.ts` y `lib/supabase/server.ts`.

### 🔹 FASE 2: Algoritmo de Disponibilidad de Citas (`GET /api/availability`)
- Desarrollar la lógica que toma una fecha, consulta la jornada laboral (`availability`), resta las citas ya agendadas (`bookings`) y considera los `buffer_minutes` de descanso/preparación entre clientes.
- Retornar los slots de tiempo disponibles formateados en ISO / HH:mm.

### 🔹 FASE 3: Componente de Reserva Interactivo (`/reservas`)
- Diseñar la interfaz de usuario con estética de lujo (estilo editorial borgoña/dorado/oscuro).
- Flujo en 3 pasos:
  1. Selección de servicio (precio, duración y depósito).
  2. Calendario de fechas y selector de horarios disponibles.
  3. Formulario de contacto y método de atención (estudio vs a domicilio).

### 🔹 FASE 4: Cobro de Depósitos con Stripe
- Endpoint `POST /api/checkout` para inicializar Stripe Checkout con el valor de `deposit_required`.
- Webhook `/api/webhooks/stripe` para actualizar la reserva a `deposit_paid` y `confirmed` cuando el pago sea exitoso.

### 🔹 FASE 5: Mensajería por WhatsApp
- Implementar `lib/notifications/whatsapp.ts` para enviar notificaciones automáticas al teléfono de la artista y del cliente tras confirmarse el depósito.

### 🔹 FASE 6: Panel de Administración & Calendario (`/admin/reservas`)
- Pantalla protegida para la artista con vista semanal/mensual de citas, botón para bloquear días festivos y cambio de estados de reservas.

### 🔹 FASE 7: Cargador de Plugins / Extensiones Modulares
- Crear `lib/extensions/loader.ts` para habilitar dinámicamente:
  - **Travel Fee Calculator**: Recargo por código postal.
  - **Bridal Crew Counter**: Desglose de servicios para novias y damas de honor.
  - **Skin Intake Form**: Cuestionario médico/estético pre-cita.

---

## 🚀 <INSTRUCCION_DE_INICIO_INMEDIATO>

**Comienza la implementación ahora mismo creando los tipos de TypeScript en `types/booking.ts` y la configuración de Supabase en `lib/supabase/client.ts`.**
