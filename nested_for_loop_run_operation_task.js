var task = ["check","test","run","analyze","stop"];
Array.prototype.uppercase = function(){
    for(let i0 = 0 ; i0< this.length; i0++){
        this[i0] = this[i0].toUpperCase();
    }
}
task.uppercase();

var supplement  = ["Multi-vitamin","Whey protein","BCAA","Creatine","Pre-workout"];
for(let i = 0, i2 =0 ; i<task.length; i++, i2++){
    for(let y = 0, y2 = 0 ; y<supplement.length; y++, y2++){
        console.log(i2+"."+y2+" "+ task[i] +"->" + supplement[y]+ "  0..1..2..3...Ready....DONE\n");
    }
}

/*
output

0.0 CHECK->Multi-vitamin  0..1..2..3...Ready....DONE

0.1 CHECK->Whey protein  0..1..2..3...Ready....DONE

0.2 CHECK->BCAA  0..1..2..3...Ready....DONE

0.3 CHECK->Creatine  0..1..2..3...Ready....DONE

0.4 CHECK->Pre-workout  0..1..2..3...Ready....DONE

1.0 TEST->Multi-vitamin  0..1..2..3...Ready....DONE

1.1 TEST->Whey protein  0..1..2..3...Ready....DONE

1.2 TEST->BCAA  0..1..2..3...Ready....DONE

1.3 TEST->Creatine  0..1..2..3...Ready....DONE

1.4 TEST->Pre-workout  0..1..2..3...Ready....DONE

2.0 RUN->Multi-vitamin  0..1..2..3...Ready....DONE

2.1 RUN->Whey protein  0..1..2..3...Ready....DONE

2.2 RUN->BCAA  0..1..2..3...Ready....DONE

2.3 RUN->Creatine  0..1..2..3...Ready....DONE

2.4 RUN->Pre-workout  0..1..2..3...Ready....DONE

3.0 ANALYZE->Multi-vitamin  0..1..2..3...Ready....DONE

3.1 ANALYZE->Whey protein  0..1..2..3...Ready....DONE

3.2 ANALYZE->BCAA  0..1..2..3...Ready....DONE

3.3 ANALYZE->Creatine  0..1..2..3...Ready....DONE

3.4 ANALYZE->Pre-workout  0..1..2..3...Ready....DONE

4.0 STOP->Multi-vitamin  0..1..2..3...Ready....DONE

4.1 STOP->Whey protein  0..1..2..3...Ready....DONE

4.2 STOP->BCAA  0..1..2..3...Ready....DONE

4.3 STOP->Creatine  0..1..2..3...Ready....DONE

4.4 STOP->Pre-workout  0..1..2..3...Ready....DONE


[Done] exited with code=0 in 0.127 seconds



*/
