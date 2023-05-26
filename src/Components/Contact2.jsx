const Tbox = (props) => {
    return (
        <>
        <div className="h-full w-44 backdrop-blur-xl bg-white/20 flex justify-center items-center rounded-xl font-bold">
            <div className="flex justify-center items-end">
                <h1 className="text-4xl">{props.num}</h1>
                <h1 className="text-xs mb-1 ml-1">{props.unit}</h1>
            </div>
        </div>
        </>
    )
}

export default Tbox;
