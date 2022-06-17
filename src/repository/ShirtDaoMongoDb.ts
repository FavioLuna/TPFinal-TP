import Shirt from '../modelo/Shirt.js';
import Dao from './Dao.js'
import {ConectarMongodb} from './ConectarMongodb.js'

class ShirtDaoMongodb implements Dao<Shirt,string> {
  
    private conectarMongodb : ConectarMongodb = new ConectarMongodb();

    async add (Element: Shirt) : Promise<Shirt> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('Shirts');
        await collection.insertOne(Element);
        await this.conectarMongodb.desconectar();
        return Promise.resolve(Element);
    }
    async getAll () : Promise<Shirt[]> {
        const Shirts: Array<Shirt> = [];        
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('Shirts');
        const findResult = await collection.find({}).toArray();        
        findResult.forEach( e =>  Shirts.push(  new Shirt(e.id, e.number, e.year, e.name, e.description, e.original, e.img, e.size))  );
        await this.conectarMongodb.desconectar();
        return Promise.resolve(Shirts);
    }
/*     async get (clave: string) : Promise<Shirt> {
        const db = await this.conectarMongodb.conectar();
        const collection = db.collection('Shirts');
        const findResult = await collection.findOne({nombre:clave});        
        await this.conectarMongodb.desconectar();
        const Shirt = new Shirt("",0);
        if(findResult !== null) {
            Shirt.documento = findResult.documento;
            Shirt.nombre = findResult.nombre;
        }
        return Promise.resolve(Shirt);
    }
    delete (Element: Shirt) : Promise<Shirt> {
        const Shirt = new Shirt("",1);
        return Promise.resolve(Shirt);
    }   */
}

export {ShirtDaoMongodb}