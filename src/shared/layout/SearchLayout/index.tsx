import styles from './styles.module.css'

interface ISearchLayoutProps {
  title: string
  children: React.ReactNode
  toolbar?: React.ReactNode
  sideToolbar?: React.ReactNode
  paginationController?: React.ReactNode
}

export const SearchLayout: React.FC<ISearchLayoutProps> = ({
  title,
  children,
  toolbar,
  sideToolbar,
  paginationController
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.routes}>Home &gt; Usuários &gt; Detalhes</span>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        <aside className={styles.leftSide}>{sideToolbar && sideToolbar}</aside>
        <div className={styles.rightSide}>
          {toolbar && toolbar}
          <main className={styles.userList}>{children}</main>
          {paginationController && paginationController}
        </div>
      </div>
    </div>
  )
}
