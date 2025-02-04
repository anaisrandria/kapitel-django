const Notebook = () => {
    return (
        <>
        <div className="w-screen">
            <h3 className="text-xl">Mes notes de lecture</h3>
            <div id="notes-block" className="w-3/4">
                <textarea name="notebook" id="notebook" rows="4" className="bg-white border rounded w-full p-2 my-3" placeholder="Prends des notes et suis ta progression au fil des pages..."></textarea>
                <button type="submit" className="flex justify-self-end w-full md:w-auto justify-center px-3 py-2 rounded-md border bg-amber-700 text-white text-s hover:bg-amber-800">Publier ma note</button>
            </div>
        </div>
        </>
    )
}

export default Notebook

