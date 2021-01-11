# Find the nth digit of the infinite integer sequence

Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13 ...

### Constraints
n is positive (n > 0) and will fit within the range of a 32-bit signed integer (n < 2^31)

**Note**: n is positive and will fit within the range of a 32-bit signed integer (n < 231).

I/O :

Case 1: if the value of n is,

Input  : 3

Output : 3

Case 2: if the value of n is,

Input : 12

Output : 1


### [Video Tutorial]( https://youtu.be/3aGHrMBfO1o )

### Pseudocode:

Step 1 : Start
Step 2 : Declare digits, length, first
Step 3 : Read variable n (Input)
Step 4 :
        digits = 9;
        length = 1;
        first = 1;

        while (n > length * digits ){
            n - = length * digits;
            first *= 10
            length++;
            digits *= 10;
        }

        result =  first + (n-1) / length;

        for (first = (n-1) % length; first < length - 1; first++){
            result = result / 10;
        }

        return result % 10;

Step 5: Stop




