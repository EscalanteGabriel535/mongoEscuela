import { Router } from "express";
import { createProfesores, deleteProfesores, editProfesores, renderProfesores, StatusProfesores, updateProfesores } from "../controllers/profesorController";
import { createAlumnos, deleteAlumnos, editAlumnos, renderAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";
import { createAsignaturas, deleteAsignaturas, editAsignaturas, renderAsignaturas, StatusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";

const router = Router();


//IMPORTACIONES PARA COLECCION ALUMNO
router.get("/", renderAlumnos);
router.post("/alumnos/agregar",createAlumnos );
router.get("/updateAlumno/:id", editAlumnos);
router.post("/updateAlumno/:id", updateAlumnos);
router.get("/deleteAlumno/:id", deleteAlumnos);
router.get("/statusAlumnos/:id", statusAlumnos);


//IMPORTACIONES PARA COLECCION ASIGNATURA

router.get("/", renderAsignaturas);
router.post("/asignaturas/agregar", createAsignaturas );
router.get("/updateAsignaturas/:id", editAsignaturas);
router.post("/updateAsignaturas/:id", updateAsignaturas);
router.get("/deleteAsignaturas/:id", deleteAsignaturas);
router.get("/statusAsignaturas/:id", StatusAsignaturas);


//IMPORTACIONES PARA COLECCION PROFESOR

router.get("/", renderProfesores);
router.post("/profesores/agregar", createProfesores);
router.get("/updateprofesor/:id", editProfesores);
router.post("/updateprofesor/:id", updateProfesores);
router.get("/deleteProfesores/:id", deleteProfesores);
router.get("/statusprofesores/:id", StatusProfesores);


export default router;
