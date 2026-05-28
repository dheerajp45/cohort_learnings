export const Button = ({
    disabled,children,onClick
})=>{
    return <span onClick={onClick}className={
        ` rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer 
        ${disabled ? "bg-gray-800" : "bg-green-300"}`
    }>
{children}
 sign up
    </span>
}