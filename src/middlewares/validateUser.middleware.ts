import { type Request, type Response, type NextFunction } from "express";


function validateUser(req: Request, res: Response, next: NextFunction) {
    const { name, age, email } = req.body;
    // 1- Verifica null/undefined
    if (name == null || age == null || email == null) {
        return res.status(400).json({
            message: "Os campos (name, age e email) não podem ser null/undefined."
        })
    };

   // 2- Verifica campos vazios
    if (typeof name !== "string") {
        return res.status(400).json({
            message: `A propriedade name deve ser do tipo string`
        })
    };

    if (typeof age != "number") {
        return res.status(400).json({
            message: "Propriedade age deve ser do tipo number"
        })
    }


    if (typeof email != "string") {
        return res.status(400).json({
            message: `A propriedade email deve ser do tipo string`
        })
    }

    // 3- Verifica strings vazias
    if (name.trim() === "" || email.trim() === "") {
        return res.status(400).json({
            message: "Todos os campos devem ser preenchidos (name, age e email)."
        })
    }
    
    // 4 - Verifica se usuário tem menos que 0 anos de idade
    if (age <= 0) {
        return res.status(400).json({
            message: "Usuário não pode ter essa idade"
        })
    }

    next();
}

export { validateUser };