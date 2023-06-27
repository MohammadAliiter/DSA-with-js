 import java.util.*;
public class sortarrayinwaveform {
        void swape( int arr[] , int a, int b){
               int temp = arr[a];
               arr[a] = arr[b];
               arr[b] = temp;
        }
    void findwavearray(int arr[], int len){

                    Arrays.sort(arr);

                     for(int i = 0; i<len-1; i += 2){
                           swape( arr , i,i+1);
                     }
    }
    public static void main(String args[])
    {
        sortarrayinwaveform wavearray = new sortarrayinwaveform();
              int arr[] = {1,2,3,4,5,6};
              int len = arr.length;
              wavearray.findwavearray(arr,len);
              for(int i = 0; i<len; i++){
                System.out.print(arr[i] + "  " );
              }

    }
}