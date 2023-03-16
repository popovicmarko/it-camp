

function FakeBin(x) {
    arr = x.split("")
    str=""
    for(num of arr){
        if(Number(num)>=5){
            str+="1"
        }else{
            str="0"
        }
    }
    return str
}
