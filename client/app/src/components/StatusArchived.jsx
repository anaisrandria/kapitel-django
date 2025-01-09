import BookCard from "./BookCard"

function StatusArchived({ books, setBooks }) {

    return (
        <div className="pt-4 pb-4 w-full gap-2">
            <h2 className="text-2xl">Mes lectures archivées</h2>
            <p className="text-xs text-gray-400">Les livres que je n'ai pas envie de terminer.</p>
            <div className="mt-8 flex gap-6 w-[80vw] overflow-x-auto">
                
            </div>
        </div>
    )
}

export default StatusArchived