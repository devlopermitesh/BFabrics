import { twMerge } from "tailwind-merge"

const BorderView=({children,className}:{children:React.ReactNode,className:string})=>{
return(
    <div className={twMerge("flex w-full mt-10 rounded border border-inactive border-dashed p-2  ",className)}>
        {children}
    </div>
)
}
export default BorderView