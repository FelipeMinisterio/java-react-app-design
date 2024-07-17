import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {


    public static void main(String[] args) {
        String jt = "Java engineer";
        JobTitlesFormatted jobTitlesFormatted = new JobTitlesFormatted();

        String normalisedTitle = jobTitlesFormatted.normalise(jt);
        System.out.println(normalisedTitle);

        jt = "C# engineer";
        normalisedTitle = jobTitlesFormatted.normalise(jt);
        System.out.println(normalisedTitle);

        jt = "Accountant";
        normalisedTitle = jobTitlesFormatted.normalise(jt);
        System.out.println(normalisedTitle);

        jt = "Chief Accountant";
        normalisedTitle = jobTitlesFormatted.normalise(jt);
        System.out.println(normalisedTitle);

        //extra output
        //higher match
        jt = "Chief Accountant Senior";
        normalisedTitle = jobTitlesFormatted.normalise(jt);
        System.out.println(normalisedTitle);

    }

}