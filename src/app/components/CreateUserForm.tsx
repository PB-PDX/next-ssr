'use client'
import { useState } from 'react'
import { api } from '@/lib/trpc/client'

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: ''
  })

  const createUser = api.user.createUser.useMutation({
    onSuccess: (newUser) => {
      alert(`User created: ${newUser.name}`)
      setFormData({ email: '', name: '', username: '' })
    },
    onError: (error) => {
      alert(`Error: ${error.message}`)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createUser.mutate({
      email: formData.email,
      name: formData.name,
      username: formData.username || undefined
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Username (optional)
        </label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="johndoe"
        />
      </div>

      <button
        type="submit"
        disabled={createUser.isPending}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {createUser.isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  )
}