import { Navigate, Route, Routes } from 'react-router-dom'
import { SearchUser } from '../pages/SearchUser'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchUser />} />

      <Route path="*" element={<Navigate to="/search" />} />
    </Routes>
  )
}
