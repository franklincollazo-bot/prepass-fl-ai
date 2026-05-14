-- 1. LIMPIAR TABLAS EXISTENTES (Opcional por seguridad)
DROP TABLE IF EXISTS course_modules;

-- 2. CREAR TABLA DE MÓDULOS CON SOPORTE MULTILINGÜE
CREATE TABLE course_modules (
  id SERIAL PRIMARY KEY,
  title_es TEXT,
  title_en TEXT,
  title_ht TEXT,
  title_pt TEXT,
  title_fr TEXT,
  content_es TEXT,
  content_en TEXT,
  content_ht TEXT,
  content_pt TEXT,
  content_fr TEXT,
  video_url TEXT,
  order_index INT
);

-- 3. INSERTAR CONTENIDO DE LOS 10 MÓDULOS (EJEMPLO MÓDULOS 1 Y 2)
INSERT INTO course_modules (order_index, title_es, title_en, title_ht, title_pt, title_fr, content_es, content_en, content_ht, content_pt, content_fr, video_url)
VALUES 
(1, 'Fundamentos del Riesgo', 'Insurance Basics', 'Baz Asirans', 'Conceitos Básicos', 'Bases de l''Assurance', 'El riesgo es la incertidumbre...', 'Risk is the uncertainty...', 'Risk se ensètitid...', 'Risco é a incerteza...', 'Le risque est l''incertitude...', 'https://www.youtube.com/watch?v=U_yeSVvszxw'),
(2, 'Gastos Médicos (HMO/PPO)', 'Medical Expense Insurance', 'Asirans Depans Medikaman', 'Seguro de Despesas Médicas', 'Assurance Frais Médicaux', 'HMO vs PPO...', 'HMO vs PPO...', 'HMO vs PPO...', 'HMO vs PPO...', 'HMO vs PPO...', 'https://www.youtube.com/watch?v=U_yeSVvszxw');

-- 4. CREAR TABLA DE USUARIOS CON ACCESO ADMIN
CREATE TABLE app_users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email TEXT UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE,
  has_access BOOLEAN DEFAULT FALSE
);

-- 5. INSERTAR TU ACCESO ADMINISTRADOR (FRANKLIN)
-- Nota: Esto asocia tu email al rol de admin
INSERT INTO app_users (email, is_admin, has_access) 
VALUES ('franklincollazo@gmail.com', TRUE, TRUE);
