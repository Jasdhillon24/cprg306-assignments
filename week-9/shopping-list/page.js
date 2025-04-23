"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ShoppingList() {
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); // Redirect to the home page if not logged in
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      {/* Render your shopping list UI here */}
    </div>
  );
}
