import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Shield, Smartphone, Users, FileText, ChevronDown, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] font-sans selection:bg-red-100">

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-[#F3F4F6]/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Naa Khata Logo"
                fill
                className="object-contain" // Preserves aspect ratio 
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Naa Khata</span>
          </div>

          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <a href="#features" className="hover:text-[#DC2626] transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-[#DC2626] transition-colors">How it Works</a>
              <a href="#faq" className="hover:text-[#DC2626] transition-colors">FAQ</a>
            </div>
            <Link href="/login">
              <button className="px-5 py-2.5 text-sm font-bold text-white bg-[#16A34A] hover:bg-[#15803d] rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#F3F4F6]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-green-100/40 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-sm font-semibold mb-2">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Trusted by 5,000+ Local Shops
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
                Your Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-orange-600">Khata Book</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
                Manage your <strong>Udhaar</strong> and <strong>Jama</strong> effortlessly.
                Replace your paper ledger with a secure, 100% free digital solution.
                <br className="hidden md:block" /> No more lost money.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                <Link href="/login" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 text-lg font-bold text-white bg-[#DC2626] hover:bg-[#b91c1c] rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl shadow-sm transition-colors">
                  See How It Works
                </button>
              </div>
            </div>

            {/* Visual Content - Mockup or Illustration */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-xl mx-auto">
              <div className="relative aspect-square md:aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl border border-gray-200 flex items-center justify-center overflow-hidden p-8">
                {/* Abstract UI Representation */}
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-gray-500" />
                <div className="z-10 bg-white w-full h-full rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
                  {/* Fake Header */}
                  <div className="h-14 bg-white border-b border-gray-100 flex items-center px-4 space-x-3">
                    <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-bold">R</div>
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-gray-200 rounded"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded mt-1"></div>
                    </div>
                  </div>
                  {/* Fake Body */}
                  <div className="flex-1 p-4 space-y-3 bg-[#F9FAFB]">
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      <div className="h-3 w-12 bg-red-50 text-red-600 text-xs font-bold flex items-center justify-center rounded">gave</div>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                      <div className="h-3 w-12 bg-green-50 text-[#16A34A] text-xs font-bold flex items-center justify-center rounded">got</div>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="h-3 w-28 bg-gray-200 rounded"></div>
                      <div className="h-3 w-12 bg-red-50 text-red-600 text-xs font-bold flex items-center justify-center rounded">gave</div>
                    </div>
                  </div>
                  {/* Fake Footer Actions */}
                  <div className="h-16 bg-white border-t border-gray-100 flex">
                    <div className="flex-1 flex items-center justify-center text-[#DC2626] font-bold border-r border-gray-100 bg-red-50/50">- GAVE</div>
                    <div className="flex-1 flex items-center justify-center text-[#16A34A] font-bold bg-green-50/50">+ GOT</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -right-6 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#16A34A]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Payment Received</p>
                      <p className="text-sm font-bold text-gray-900">₹ 540.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-extrabold text-[#DC2626]">₹10Cr+</h3>
            <p className="text-sm font-semibold text-gray-600 mt-1">Transactions Recorded</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900">5k+</h3>
            <p className="text-sm font-semibold text-gray-600 mt-1">Active Shops</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-[#16A34A]">100%</h3>
            <p className="text-sm font-semibold text-gray-600 mt-1">Safe & Secure</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">24/7</h3>
            <p className="text-sm font-semibold text-gray-600 mt-1">Support</p>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="px-6 py-24 bg-[#E5E7EB] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-base font-semibold text-[#DC2626] uppercase tracking-wide">Features</h2>
            <p className="mt-2 text-3xl md:text-5xl font-extrabold text-[#1F2937]">Everything you need to run your shop</p>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Designed for speed, simplicity, and safety.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Users className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Customer List</h3>
              <p className="text-gray-600 leading-relaxed">
                Import contacts in one tap. See who owes you what at a glance. Organize your "Khata" professionally.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#16A34A] transition-colors duration-300">
                <Smartphone className="w-7 h-7 text-[#16A34A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Simple Ledger</h3>
              <p className="text-gray-600 leading-relaxed">
                Big Red Button for <span className="font-bold text-[#DC2626]">Gave</span>. Big Green Button for <span className="font-bold text-[#16A34A]">Got</span>. Recording a transaction takes less than 3 seconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <Shield className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is encrypted and backed up to the cloud automatically. Even if you lose your phone, you won't lose your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="how-it-works" className="py-24 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">How it works</h2>
            <p className="text-gray-600 mt-4">Start managing your business in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-300 -z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center md:items-start">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-[#DC2626] flex items-center justify-center text-3xl font-bold text-[#DC2626] shadow-sm mb-6">1</div>
              <h3 className="text-xl font-bold mb-2">Create Account</h3>
              <p className="text-gray-600 text-center md:text-left">Use your phone number to login safely via OTP. No passwords to remember.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center md:items-start">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center text-3xl font-bold text-gray-400 shadow-sm mb-6">2</div>
              <h3 className="text-xl font-bold mb-2">Add Customers</h3>
              <p className="text-gray-600 text-center md:text-left">Add your regular customers from your contacts or create new profiles instantly.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center md:items-start">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-[#16A34A] flex items-center justify-center text-3xl font-bold text-[#16A34A] shadow-sm mb-6">3</div>
              <h3 className="text-xl font-bold mb-2">Start Recording</h3>
              <p className="text-gray-600 text-center md:text-left">Use the "Gave" and "Got" buttons to track every rupee in your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {/* Q1 */}
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white transition-colors cursor-pointer group">
              <h4 className="font-bold text-lg text-gray-900 flex justify-between items-center">
                Is Naa Khata really free?
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:rotate-180 transition-transform" />
              </h4>
              <p className="mt-4 text-gray-600 hidden group-hover:block transition-all">Yes, the core ledger features are completely free for all shopkeepers.</p>
            </div>
            {/* Q2 */}
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white transition-colors cursor-pointer group">
              <h4 className="font-bold text-lg text-gray-900 flex justify-between items-center">
                Is my data safe if I lose my phone?
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:rotate-180 transition-transform" />
              </h4>
              <p className="mt-4 text-gray-600 hidden group-hover:block transition-all">Absolutely. Your data is synced to our secure cloud servers. Just login with your phone number on a new device to get everything back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BIG CTA --- */}
      <section className="py-24 px-6 bg-[#1F2937] text-white text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Stop worrying about <br />
            <span className="text-red-400">Udhaar</span> today.
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
            Join the digital revolution. Save time, recover more payments, and grow your business with Naa Khata.
          </p>
          <Link href="/login">
            <button className="px-12 py-5 bg-white text-[#1F2937] text-xl font-bold rounded-2xl hover:bg-gray-100 transition-colors shadow-2xl hover:scale-105 transform duration-200">
              Create Free Account
            </button>
          </Link>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 px-6 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-900">Naa Khata</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              The most trusted digital ledger for small businesses in India. empowering shopkeepers with technology.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#DC2626]">Features</a></li>
              <li><a href="#" className="hover:text-[#DC2626]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#DC2626]">Security</a></li>
              <li><a href="#" className="hover:text-[#DC2626]">Download App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#DC2626]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#DC2626]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#DC2626]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#DC2626]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Naa Khata Technologies Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
