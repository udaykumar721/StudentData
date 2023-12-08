const readline = require("readline-sync");
let studentDetails =[{
    roll_no : 501,
    name :"latha",
    class : 5,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 502,
    name :"Bunny",
    class : 5,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 503,
    name :"madhu",
    class : 5,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 504,
    name :"arjun",
    class : 5,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 505,
    name :"kiran",
    class : 5,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 601,
    name :"reema",
    class : 6,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 602,
    name :"jessy",
    class : 6,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 603,
    name :"jillu",
    class : 6,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 604,
    name :"janvi",
    class : 6,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 605,
    name :"Dhoni",
    class : 6,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 701,
    name :"venki",
    class : 7,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 702,
    name :"viraj",
    class : 7,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 703,
    name :"leena",
    class : 7,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 704,
    name :"saara",
    class : 7,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 705,
    name :"Kumar",
    class : 7,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 801,
    name :"Aruna",
    class : 8,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 802,
    name :"mercy",
    class : 8,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 803,
    name :"shiva",
    class : 8,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 804,
    name :"dattu",
    class : 8,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 805,
    name :"reetu",
    class : 8,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 901,
    name :"rohan",
    class : 9,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 902,
    name :"rajiv",
    class : 9,
    gender : "M",
    test_Score : []
    },
    {
    roll_no : 903,
    name :"ramya",
    class : 9,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 904,
    name :"rohit",
    class : 9,
    gender : "F",
    test_Score : []
    },
    {
    roll_no : 905,
    name :"virat",
    class : 9,
    gender : "M",
    test_Score : []
    },

]


function takeTest(){
    studentDetails.forEach((ele) => {
        ele.test_Score.push({sub_name :"maths", marks:Math.floor(Math.random()*(90-30)+30)})
        ele.test_Score.push({sub_name:"physics",marks:Math.floor(Math.random()*(90-30)+30)})
        ele.test_Score.push({sub_name:"english",marks:Math.floor(Math.random()*(90-30)+30)})
            
    });
    
}


function viewResults(){
    console.log(`\nStudent Details:
+------+--------------------+-------+----------+------------+---------------+
| ID   |        Name        | class | Gender   |   Marks    |  Percentage   |
+------+--------------------+-------+----------+------------+---------------+`); 
   // if(studentDetails[0].test_Score.length){
        
        studentDetails.forEach((ele) => {
            if(ele.test_Score.length){
                
                ele.totalMarks = ele.test_Score[0].marks+ele.test_Score[1].marks+ele.test_Score[2].marks
                ele.percentage = Math.round((ele.totalMarks/300)*100)
                console.log(`| ${ele.roll_no}  |        ${ele.name}       |  ${ele.class}    |     ${ele.gender}    |   ${ele.totalMarks}      |      ${ele.percentage}%      |`);
            }
            else{
                console.log("Student Does Not Take The Test");
                let userChoice = readline.questionInt("1.To Take Test \nAny Key To Continue:")
                console.log(`\nStudent Details:
+------+--------------------+-------+----------+------------+---------------+
| ID   |        Name        | class | Gender   |   Marks    |  Percentage   |
+------+--------------------+-------+----------+------------+---------------+`);
                switch(userChoice){
                    case 1:
                        takeTest()
                        break;
                    default:
                        break;
            }
        }
                
    })        
    console.log("+------+--------------------+-------+----------+------------+---------------+");
}


function viewParticularPersonResults(userRollNo){
    flag = true
    viewResults()
    studentDetails.forEach((ele) => {
        if(ele.test_Score.length){
        if(ele.roll_no == userRollNo){
            console.log(`\nStudent Details:
+------+--------------------+-------+----------+------------+---------------+
| ID   |        Name        | class | Gender   |   Marks    |  Percentage   |
+------+--------------------+-------+----------+------------+---------------+`);
            console.log(`| ${ele.roll_no}  |        ${ele.name}       |  ${ele.class}    |     ${ele.gender}    |   ${ele.totalMarks}      |      ${ele.percentage}%      |`);
            console.log("+------+--------------------+-------+----------+------------+---------------+");
            flag = false
        }
    }
    })
    if(flag){
        console.log("Student Does Not Take The Test Take The Test First!!!");
        let userOption = readline.questionInt("1.To Take Test \nAny Key To Continue:")
    
        if(userOption == 1){
            takeTest()
        }
        else{
            console.log("User Need To Take Test First");
        }
    }
    
    
}

let choice = 0
while (choice!=4) {
    choice = readline.questionInt("1.Take Test\n2.View Results\n3.View Student Results\n4.Exit\nEnter The Above Option You Want:")
    switch (choice) {
        case 1:
            takeTest()
            break;
        case 2:
            viewResults()
            break;
        case 3:
            let userRollNo = readline.questionInt("Enter The Roll No Of Student You Want To Check The Marks :")
            viewParticularPersonResults(userRollNo)
            break;
        case 4:
            console.log("Thank You For Visiting!!\n");
            break;
        default:
            console.log("Invaild Input! Enter Vaild Input\n");
            break;
    }
}
