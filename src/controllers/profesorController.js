import Profesores from "../models/Profesores";


export const renderProfesores = async (req, res) => {
    const profesores = await Profesores.find().lean();
    res.render("index", { profesores : profesores });
  };


export const createProfesores = async (req, res) => {
    const profesores = Profesores(req.body);
    await profesores.save();
    res.redirect("/");
  };


export const editProfesores = async (req, res) => {
    try {
      const profesores= await Profesores.findById(req.params.id).lean();
      res.render("editarprofesor", { profesores });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateProfesores = async (req, res) => {
    try {
      const { id } = req.params;
      await Profesores.findByIdAndUpdate(id, req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

export const deleteProfesores = async(req,res) =>{
    const {id} = req.params;
    await Profesores.findByIdAndDelete(id, req.body);
    res.redirect("/");
  };

export const StatusProfesores = async(req,res) =>{
    const {id} = req.params;
    const profesores = await Profesores.findById(id);
    profesores.opcion = !profesores.opcion;
    await profesores.save();
    res.redirect("/");
  };