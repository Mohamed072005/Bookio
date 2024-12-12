import React from 'react'
import { Separator } from '@/components/ui/separator'

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-primary-foreground py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">We are passionate about connecting readers with their next favorite book. Explore our vast collection and discover new worlds through literature.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Catalog</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <address className="text-sm not-italic">
                            <p>123 Book Street</p>
                            <p>Libraryville, LB 12345</p>
                            <p>Email: info@libraryname.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </address>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="text-center text-sm">
                    © 2023 Bookio. All rights reserved.
                </div>
            </div>
        </footer>
    )
}