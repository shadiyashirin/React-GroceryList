import LineItem from "./LineItem";

function ItemList({ items, handleCheck, handleDelete }) {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList
