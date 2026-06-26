"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import useRole from '@/hooks/useRole';
import { 
  FiUser, FiShoppingBag, FiHeart, FiCreditCard, FiSliders,
  FiPlusCircle, FiList, FiTrendingUp, FiUsers, FiHome, FiLogOut
} from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const DashboardLayout = ({ children }) => {
  const { user, logOut } = useAuth();
  const [role, loading] = useRole();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please login to access dashboard.");
      router.push('/login?from=' + pathname);
    }
  }, [user, loading, router, pathname]);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Signed out successfully.");
      router.push('/');
    } catch (err) {
      console.error(err);
      toast.error("Logout failed.");
    }
  };

  const isLinkActive = (path, exact = false) => {
    if (exact) return pathname === path;
    return pathname.startsWith(path);
  };

  const renderSidebarLinks = () => {
    if (role === 'admin') {
      return (
        <>
          <li>
            <Link href="/dashboard/admin" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/admin', true) ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiSliders className="w-5 h-5" /> Admin Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/manage-users" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/admin/manage-users') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiUsers className="w-5 h-5" /> Manage Users
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/manage-products" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/admin/manage-products') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiList className="w-5 h-5" /> Manage Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/manage-orders" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/admin/manage-orders') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiShoppingBag className="w-5 h-5" /> Manage Orders
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/platform-analytics" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/admin/platform-analytics') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiTrendingUp className="w-5 h-5" /> Platform Analytics
            </Link>
          </li>
        </>
      );
    }

    if (role === 'seller') {
      return (
        <>
          <li>
            <Link href="/dashboard/seller" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/seller', true) ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiSliders className="w-5 h-5" /> Seller Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/seller/add-product" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/seller/add-product') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiPlusCircle className="w-5 h-5" /> Add Product
            </Link>
          </li>
          <li>
            <Link href="/dashboard/seller/my-products" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/seller/my-products') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiList className="w-5 h-5" /> My Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/seller/manage-orders" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/seller/manage-orders') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiShoppingBag className="w-5 h-5" /> Manage Orders
            </Link>
          </li>
          <li>
            <Link href="/dashboard/seller/analytics" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/seller/analytics') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
              <FiTrendingUp className="w-5 h-5" /> Sales Analytics
            </Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Link href="/dashboard/buyer" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/buyer', true) ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
            <FiSliders className="w-5 h-5" /> Buyer Overview
          </Link>
        </li>
        <li>
          <Link href="/dashboard/buyer/my-orders" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/buyer/my-orders') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
            <FiShoppingBag className="w-5 h-5" /> My Orders
          </Link>
        </li>
        <li>
          <Link href="/dashboard/buyer/wishlist" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/buyer/wishlist') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
            <FiHeart className="w-5 h-5" /> Wishlist
          </Link>
        </li>
        <li>
          <Link href="/dashboard/buyer/payment-history" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/buyer/payment-history') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
            <FiCreditCard className="w-5 h-5" /> Payment History
          </Link>
        </li>
        <li>
          <Link href="/dashboard/buyer/profile" className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${isLinkActive('/dashboard/buyer/profile') ? 'bg-primary text-white shadow-lg' : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'}`}>
            <FiUser className="w-5 h-5" /> Profile Settings
          </Link>
        </li>
      </>
    );
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-300 text-base-content font-sans w-full">
      <aside className="w-80 bg-base-200 border-r border-base-300 flex flex-col justify-between p-6 shrink-0 hidden md:flex">
        <div className="space-y-8">
          <Link href="/" className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 px-3">
            ReSell Hub
          </Link>

          <div className="flex items-center gap-4 bg-base-300 p-4 rounded-2xl border border-base-200">
            <div className="w-12 h-12 rounded-full bg-base-100 flex items-center justify-center font-bold text-primary border border-primary/20 overflow-hidden">
              {user?.image ? (
                <img src={user.image} alt={user.name} className="rounded-full w-full h-full object-cover" />
              ) : (
                <span className="uppercase">{user?.name?.slice(0, 2)}</span>
              )}
            </div>
            <div className="overflow-hidden">
              <h4 className="font-bold text-sm text-base-content truncate">{user?.name}</h4>
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{role}</p>
            </div>
          </div>

          <ul className="space-y-2">
            {renderSidebarLinks()}
          </ul>
        </div>

        <div className="space-y-2 pt-6 border-t border-base-300">
          <Link href="/" className="flex items-center gap-3 p-3 rounded-xl text-base-content/75 hover:bg-base-300 hover:text-base-content transition-all font-semibold">
            <FiHome className="w-5 h-5" /> Return Home
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-all font-semibold">
            <FiLogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-grow flex flex-col min-h-screen bg-base-100 overflow-y-auto w-full">
        <div className="p-6 md:p-10 flex-grow w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
