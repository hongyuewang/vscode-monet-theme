import java.util.*;

public class Java {
    private int i;
    private String s;
    private boolean b;
    private String name;
    private static ArrayList<String> arr = new ArrayList<String>();

    public Java(String name) {
        this.i = 14;
        this.s = "Hello";
        this.b = true;
        this.name = name;
    }

    public static void main(String[] args) {
        Java java = new Java("Name");

        for (int i = 0; i < 100; i++) {
            java = new Java("New name");
            System.out.println("Hello world!");
        }
    }
}