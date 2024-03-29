// un enum es una colección de valores constantes
public enum Color {
    ROJO("Rojo"),
    AMARILLO("Amarillo"),
    AZUL("Azul"),
    BLANCO("Blanco"),
    GRIS("Gris Oscuro"),
    NARANJO("Naranja");

    private final String color;

    Color(String color){
        this.color = color;
    }

    public String getColor(){
        return color;
    }
}
