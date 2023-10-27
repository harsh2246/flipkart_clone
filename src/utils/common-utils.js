export const addElipsis=(text)=>{
    if(text==""){return text}
    else if(text.length>50)
    {return text.substring(0,50)+"..."}
}