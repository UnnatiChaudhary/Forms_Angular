import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filter'
})

export class agePipe implements PipeTransform{

    transform(value: {data:any[]} | null):any[] {

        const resultArray=[];
      
        for(const item of value.data){
            if (item && typeof item.age === 'number' && item.age < 40) {
                resultArray.push(item);
              }
        }
        return resultArray;
    }
}