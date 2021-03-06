export function RepositoryItem(props) {
    return (
        <li key={props.key}>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    )
}