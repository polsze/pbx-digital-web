import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Página no encontrada</p>
      <Link to="/" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage