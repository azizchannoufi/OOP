function Cat(t,h,l,hap){
    var cat={}
    cat.tiredness=t,
    cat.hunger=h,
    cat.lonliness=l,
    cat.happiness=hap,
    cat.feed=feed,
    cat.sleep=sleep,
    cat.pet=pet,
    cat.status=stat
    return cat
}
var feed=function(){
    if(this.hunger<5){       
            this.hunger++      
    }
}
var sleep=function(){
    if(this.tiredness<5){      
            this.tiredness++
    }
}
var pet=function(){
    if(this.happiness<5){       
            this.happiness++
    }
}

var stat=function(){
    if(this.tiredness<5){
        console.log("tired")
    }
    else if(this.hunger<5){
        console.log("hunger")
    }
    else if(this.lonliness<5){
        console.log("lonly")
    }
    else if(this.happiness<5){
        console.log("not happy")
    }
}
