const readline = require("readline-sync");
let studentDetails =[{
    roll_no : 720,
    name :"uday",
    class : 5,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 721,
    name :"uday",
    class : 5,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 722,
    name :"hema",
    class : 5,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 723,
    name :"raju",
    class : 5,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 724,
    name :"kiran",
    class : 5,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 121,
    name :"reema",
    class : 6,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 122,
    name :"jessy",
    class : 6,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 123,
    name :"jaswanth",
    class : 6,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 124,
    name :"jathin",
    class : 6,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 125,
    name :"mahesh",
    class : 6,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 201,
    name :"venki",
    class : 7,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 202,
    name :"vasu",
    class : 7,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 203,
    name :"lakshmi",
    class : 7,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 204,
    name :"vaishu",
    class : 7,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 721,
    name :"uday",
    class : 7,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 11,
    name :"Alekhya",
    class : 8,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 12,
    name :"mery",
    class : 8,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 13,
    name :"siva",
    class : 8,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 14,
    name :"dattu",
    class : 8,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 721,
    name :"sandhya",
    class : 8,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 71,
    name :"venkat",
    class : 9,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 72,
    name :"raju",
    class : 9,
    gender : "male",
    test_Score : []
    },
    {
    roll_no : 73,
    name :"ramya",
    class : 9,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 74,
    name :"rani",
    class : 9,
    gender : "female",
    test_Score : []
    },
    {
    roll_no : 75,
    name :"virat",
    class : 9,
    gender : "male",
    test_Score : []
    },

]

let choice = 0
while (choice!=4) {
    choice = readline.questionInt("1.Take Test\n2.View Results\n3.View Student Results\n4.Exit\nEnter The Above Option You Want:")
    switch (choice) {
        case 1:
            
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            console.log("Thank You For Visiting!!\n");
            break;
        default:
            console.log("Invaild Input! Enter Vaild Input\n");
            break;
    }
}