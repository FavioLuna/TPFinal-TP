class Shirt {
    
    year: string         // private String nombre;
    id: number      // private int id;
    number: number
    name: string
    description: string
    original: boolean
    img: string
    size: number

    constructor( id: number, number: number, year: string, name: string, description: string, original: boolean, img: string, size: number) {
        this.year = year;
        this.id = id;
        this.number = number;
        this.name = name;
        this.description = description;
        this.original = original;
        this.img = img;
        this.size = size;
    }
    
}

export default Shirt