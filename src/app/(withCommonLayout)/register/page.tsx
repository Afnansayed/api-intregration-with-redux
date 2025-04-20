"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useAppDispatch } from "@/redux/hooks"
import { addUser } from "@/redux/slice/userSlice"

export default function RegisterPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useAppDispatch();

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    // Error state
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    // Toast state
    const [toast, setToast] = useState<{
        show: boolean
        title: string
        message: string
        type: "success" | "error"
    }>({
        show: false,
        title: "",
        message: "",
        type: "success",
    })

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }))
        }
    }

    // Validate form
    const validateForm = () => {
        let isValid = true
        const newErrors = { ...errors }

        // Name validation
        if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters."
            isValid = false
        } else {
            newErrors.name = ""
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address."
            isValid = false
        } else {
            newErrors.email = ""
        }

        // Password validation
        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters."
            isValid = false
        } else {
            newErrors.password = ""
        }

        // Password confirmation validation
        if (formData.password !== formData.password_confirmation) {
            newErrors.password_confirmation = "Passwords do not match."
            isValid = false
        } else {
            newErrors.password_confirmation = ""
        }

        setErrors(newErrors)
        return isValid
    }

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsLoading(true)

        try {
            // This would be replaced with your actual registration API call
            console.log(formData)
            const data = { ...formData, id: 1, confirmPassword: formData.password_confirmation }

            dispatch(addUser(data))

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Show success toast
            setToast({
                show: true,
                title: "Registration successful!",
                message: "Your account has been created.",
                type: "success",
            })

            // Hide toast after 3 seconds
            setTimeout(() => {
                setToast((prev) => ({ ...prev, show: false }))
                // Redirect to login page after successful registration
                router.push("/login")
            }, 3000)
        } catch (error) {
            console.log(error)
            // Show error toast
            setToast({
                show: true,
                title: "Registration failed",
                message: "There was a problem with your registration.",
                type: "error",
            })

            // Hide toast after 3 seconds
            setTimeout(() => {
                setToast((prev) => ({ ...prev, show: false }))
            }, 3000)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            {/* Toast notification */}
            {toast.show && (
                <div
                    className={`fixed top-4 right-4 p-4 rounded-md shadow-md max-w-md z-50 ${toast.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                        }`}
                >
                    <div className="flex">
                        <div className="flex-shrink-0">
                            {toast.type === "success" ? (
                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>
                        <div className="ml-3">
                            <h3 className={`text-sm font-medium ${toast.type === "success" ? "text-green-800" : "text-red-800"}`}>
                                {toast.title}
                            </h3>
                            <div className={`mt-2 text-sm ${toast.type === "success" ? "text-green-700" : "text-red-700"}`}>
                                <p>{toast.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Registration card */}
            <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="px-6 py-8">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
                        <p className="mt-2 text-sm text-gray-600">Enter your information to create an account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-md border ${errors.name ? "border-red-300" : "border-gray-300"
                                    } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-md border ${errors.email ? "border-red-300" : "border-gray-300"
                                    } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`block w-full rounded-md border ${errors.password ? "border-red-300" : "border-gray-300"
                                        } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="relative mt-1">
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                    className={`block w-full rounded-md border ${errors.password_confirmation ? "border-red-300" : "border-gray-300"
                                        } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                                </button>
                            </div>
                            {errors.password_confirmation && (
                                <p className="mt-1 text-xs text-red-600">{errors.password_confirmation}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75"
                        >
                            {isLoading ? "Creating account..." : "Register"}
                        </button>
                    </form>
                </div>

                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
