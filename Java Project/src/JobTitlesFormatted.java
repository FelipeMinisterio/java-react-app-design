import java.util.Arrays;
import java.util.List;

public class JobTitlesFormatted {

    static List<String> jobTitleList = Arrays.asList(
            "Software Engineer",
            "Architect",
            "Quantity Surveyor",
            "Accountant",
            "Accountant Senior");

    public String normalise(String jobTitle) {
        String[] jobTitlesArray;
        int match=0;
        int higherMatch=0;
        String jobTitleMatch = "";
        for(String jobTitleFromList : jobTitleList){
            jobTitlesArray = jobTitleFromList.toLowerCase().split(" ");
            for(String jobTitleKey : jobTitlesArray){
                if(jobTitle.toLowerCase().contains(jobTitleKey)){
                    match++;
                }
            }
            if(match>higherMatch){
                higherMatch = match;
                jobTitleMatch = jobTitleFromList;
            }
            match = 0;
        }
        return jobTitleMatch;
    }
}
