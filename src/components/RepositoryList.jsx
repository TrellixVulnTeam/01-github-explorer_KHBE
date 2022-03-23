const repositoryName = "unform7";

export function RepositoryList(){
    return ( 
        <section className="repository-list">
            <h1>Lista de Repositórios: </h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar Repositório
                    </a>
                </li>
            </ul>
        </section>
    );
}