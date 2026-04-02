function Card({
    children
}){
    return <div style={{
        background:"black",
        borderRadius:10,
        color:"white",
        margin:10,
        padding:10
    }
    }>
        {children}{children}
    </div>
}

export{Card}