CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE Cursos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco TEXT NOT NULL
);

CREATE TABLE Modulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    CursoId INT NOT NULL,
    FOREIGN KEY (CursoId) REFERENCES Cursos(id) ON DELETE CASCADE
);

CREATE TABLE Matriculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioId INT NOT NULL,
    CursoId INT NOT NULL,
    FOREIGN KEY (UsuarioId) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (CursoId) REFERENCES Cursos(id) ON DELETE CASCADE
);