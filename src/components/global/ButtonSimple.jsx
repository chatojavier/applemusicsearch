const ButtonSimple = ({children, className}) => {
    return (
        <button className={`font-light text-gray-500 py-1 w-32 rounded-md border border-gray-700 border-solid hover:text-gray-200 hover:bg-gray-700 ${className}`}>{children}</button>
    )
}

export default ButtonSimple;