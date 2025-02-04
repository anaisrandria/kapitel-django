const Notebook = () => {
    return (
        <>
        <div className="w-full">
            <h3 className="text-xl">Mes notes de lecture</h3>
            <textarea name="notebook" id="notebook" rows="4" className="bg-white border w-full rounded p-2 my-3" placeholder="Prends des notes et suis ta progression au fil des pages..."></textarea>
            <button type="submit" className="flex justify-self-end justify-center px-3 py-2 rounded-md border bg-amber-700 text-white text-s hover:bg-amber-800">Publier ma note</button>
        </div>
        </>
    )
}

export default Notebook

