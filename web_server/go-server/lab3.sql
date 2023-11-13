CREATE TABLE IF NOT EXISTS Profesor (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    faculty VARCHAR(100) NOT NULL
);


INSERT INTO profesor (id, name, faculty) VALUES
('1', 'Alejandro García', 'Ingeniería'),
('2', 'Isabella Rodríguez', 'Ciencias'),
('3', 'Mateo López', 'Artes'),
('4', 'Sofía Martinez', 'Cálculo I'),
('5', 'Ursula Iguaran', 'Medicina'),
('6', 'Valentina Gómez', 'Derecho'),
('7', 'Lucas Torres', 'Ciencias de la Computación'),
('8', 'Emma Castro', 'Ciencias Sociales'),
('9', 'Dylan Vargas', 'Música'),
('10', 'Mia Morales', 'Física');


CREATE TABLE IF NOT EXISTS Asignatura (
    codigo VARCHAR(50) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    num_horas INT NOT NULL
);


INSERT INTO Asignatura (codigo, nombre, num_horas) VALUES
    ('Fil101', 'Filosofía', 60),
    ('FIS201', 'Física General', 45),
    ('INF301', 'Introducción a la Informática', 45),
    ('QUI401', 'Química Avanzada', 60),
    ('CAL501', 'Cálculo', 45);


CREATE TABLE IF NOT EXISTS Estudiante (
    codigo SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100)
);


INSERT INTO Estudiante (nombre, apellido) VALUES
('Alejandro', 'Gómez'),
('Isabella', 'López'),
('Santiago', 'Fernández'),
('Valentina', 'Martínez'),
('Mateo', 'Castillo'),
('Camila', 'Rojas'),
('Benjamín', 'Santos'),
('Luciana', 'Mendoza'),
('Matías', 'Ruiz'),
('Emma', 'Pérez'),
('Sebastián', 'Herrera'),
('Mariana', 'Gutiérrez'),
('Tomás', 'Jiménez'),
('Valeria', 'Torres'),
('Emiliano', 'Silva');



CREATE TABLE IF NOT EXISTS Correo (
    codigo_estudiante VARCHAR(100),
    correo VARCHAR(255),
    PRIMARY KEY (codigo_estudiante),
    FOREIGN KEY (codigo_estudiante) REFERENCES Estudiante(codigo)
);


INSERT INTO Estudiante (nombre, apellido) VALUES
    ('Juan', 'Pérez'),
    ('Ana', 'Gómez'),
    ('Luis', 'Martínez'),
    ('María', 'Rodríguez'),
    ('Carlos', 'Hernández'),
    ('Sofía', 'Díaz'),
    ('Javier', 'Torres'),
    ('Elena', 'Sánchez'),
    ('Andrés', 'López'),
    ('Laura', 'Ramírez'),
    ('Diego', 'Flores'),
    ('Carmen', 'Vargas'),
    ('Miguel', 'Castillo'),
    ('Valentina', 'Guerrero'),
    ('Pedro', 'Molina');


INSERT INTO Correo (codigo_estudiante, correo) VALUES
    (1, 'juan.perez@example.com'),
    (2, 'ana.gomez@example.com'),
    (3, 'luis.martinez@example.com'),
    (4, 'maria.rodriguez@example.com'),
    (5, 'carlos.hernandez@example.com'),
    (6, 'sofia.diaz@example.com'),
    (7, 'javier.torres@example.com'),
    (8, 'elena.sanchez@example.com'),
    (9, 'andres.lopez@example.com'),
    (10, 'laura.ramirez@example.com'),
    (11, 'diego.flores@example.com'),
    (12, 'carmen.vargas@example.com'),
    (13, 'miguel.castillo@example.com'),
    (14, 'valentina.guerrero@example.com'),
    (15, 'pedro.molina@example.com');


CREATE TABLE IF NOT EXISTS Curso (
    id SERIAL PRIMARY KEY,
    date DATE,
    profesor_id VARCHAR(100),
    FOREIGN KEY (profesor_id) REFERENCES profesor(id)
);

INSERT INTO Curso (date, profesor_id) VALUES
('2023-01-15', '1'),
('2023-02-20', '2'),
('2023-03-25', '3'),
('2023-04-30', '4'),
('2023-05-05', '5'),
('2023-06-10', '6'),
('2023-07-15', '7'),
('2023-08-20', '8'),
('2023-09-25', '9'),
('2023-10-30', '10');


INSERT INTO Curso (date, profesor_id) VALUES
(now() - interval '1 year' * random(), '1'),
(now() - interval '1 year' * random(), '2'),
(now() - interval '1 year' * random(), '3'),
(now() - interval '1 year' * random(), '4'),
(now() - interval '1 year' * random(), '5'),
(now() - interval '1 year' * random(), '6'),
(now() - interval '1 year' * random(), '7'),
(now() - interval '1 year' * random(), '8'),
(now() - interval '1 year' * random(), '9'),
(now() - interval '1 year' * random(), '10');


CREATE TABLE IF NOT EXISTS Asignatura_Curso (
    codigo_asignatura VARCHAR(100) REFERENCES Asignatura(codigo),
    curso_id SERIAL REFERENCES Curso(id),
    PRIMARY KEY (codigo_asignatura, curso_id)
);


-- Define attributes for Asignatura_Curso table
CREATE TABLE IF NOT EXISTS Asignatura_Curso (
    codigo_asignatura VARCHAR(100),
    curso_id SERIAL,
    
    -- Define constraints
    PRIMARY KEY (codigo_asignatura, curso_id),
    FOREIGN KEY (codigo_asignatura) REFERENCES Asignatura(codigo),
    FOREIGN KEY (curso_id) REFERENCES Curso(id)
);


-- Insert into Asignatura_Curso table
INSERT INTO Asignatura_Curso (codigo_asignatura, curso_id) VALUES
('MAT101', 1),
('FIS201', 2),
('INF301', 3),
('QUI401', 4),
('CAL501', 5),
('MAT101', 6),
('FIS201', 7),
('INF301', 8),
('QUI401', 9),
('CAL501', 10);


-- Create table if not exists
CREATE TABLE IF NOT EXISTS Horario_Curso (
    id SERIAL PRIMARY KEY,
    dia VARCHAR(100) NOT NULL,
    inicio DATE NOT NULL,
    fin DATE NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES Curso(id)
);


INSERT INTO Horario_Curso (dia, inicio, fin, curso_id) VALUES
('Lunes', '2022-10-01', '2023-01-01', 1),
('Martes', '2022-10-02', '2023-01-02', 2),
('Miércoles', '2022-10-03', '2023-01-03', 3),
('Jueves', '2022-10-04', '2023-01-04', 4),
('Viernes', '2022-10-05', '2023-01-05', 5),
-- Skipping Saturdays and Sundays
('Lunes', '2022-10-09', '2023-01-09', 1),
('Martes', '2022-10-10', '2023-01-10', 2),
('Miércoles', '2022-10-11', '2023-01-11', 3),
('Jueves', '2022-10-12', '2023-01-12', 4),
('Viernes', '2022-10-13', '2023-01-13', 5);
 
CREATE TABLE IF NOT EXISTS Aula (
    num Int PRIMARY KEY,
    capacidad INT NOT NULL,
    etiqueta VARCHAR(50),
    edificio VARCHAR NOT NULL,
    piso INT NOT NULL
);

INSERT INTO Aula (capacity, etiqueta, edificio, piso) VALUES
    (50, 'Salón 101', 'Edificio Principal', 1),
    (30, 'Laboratorio 201', 'Edificio de Ciencias', 2),
    (40, 'Sala de Conferencias A', 'Edificio Aulas', 3),
    (60, 'Aula Magna', 'Edificio Central', 4),
    (25, 'Sala de Estudio 301', 'Edificio Biblioteca', 3),
    (35, 'Laboratorio 102', 'Edificio de Ingeniería', 1),
    (45, 'Salón 202', 'Edificio Principal', 2),
    (55, 'Auditorio B', 'Edificio de Conferencias', 5),
    (20, 'Sala de Reuniones C', 'Edificio Administrativo', 4),
    (30, 'Sala de Proyecciones', 'Edificio de Artes', 2);


CREATE TABLE IF NOT EXISTS Curso_Aula (
    curso_id INT,
    aula_id INT,
    PRIMARY KEY (curso_id, aula_num),
    FOREIGN KEY (curso_id) REFERENCES Curso(id),
    FOREIGN KEY (aula_id) REFERENCES Aula(num)
);


/* INSERT INTO Curso_Aula (curso_id, aula_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10); */

INSERT INTO Curso_Aula (curso_id, aula_num) VALUES
    (1, 5),
    (2, 3),
    (3, 8),
    (4, 6),
    (5, 9),
    (6, 1),
    (7, 10),
    (8, 2),
    (9, 7),
    (10, 4);




    

