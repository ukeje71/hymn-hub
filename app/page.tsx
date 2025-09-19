"use client"

import { useState } from "react";
import Bot from "./Bot/bot";
import { Metadata } from "next";

export const metadata:Metadata={
  title: "Hymn Hub - Manage Your Hymn Library",
  description: "A comprehensive tool for managing and projecting hymn lyrics and notes.,Discover, add, and manage Christian hymns with EasyHymn. Search lyrics, authors, and more for worship and study.",
  keywords: ["hymns", "Christian hymns", "hymn lyrics", "hymn management", "worship songs", "church music", "hymn projection", "hymn notes", "hymn library", "hymn search"],
  openGraph:{
    title: "Hymn Hub - Manage Your Hymn Library",
    description: "A comprehensive tool for managing and projecting hymn lyrics and notes.,Discover, add, and manage Christian hymns with EasyHymn. Search lyrics, authors, and more for worship and study.",
    url: "https://hymn-hub.vercel.app/",
    siteName: "Hymn Hub",
    images:[
      {
        url:''
      }
    ]
  }
}

export default function Hymns() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newHymnTitle, setNewHymnTitle] = useState("");
  const [newHymnAuthor, setNewHymnAuthor] = useState("");
  const [newHymnNumber, setNewHymnNumber] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Body Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 md:p-3 pt-20 md:pt-24">
        {/* Left Section (Search, Add Song, Hymn Library) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search Library */}
          <section className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Search Library
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search by title, lyrics, or number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <div className="flex gap-2">
                <button className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">
                  Search
                </button>
                <button className="px-5 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                  Filter
                </button>
                <button className="px-5 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                  Clear
                </button>
              </div>
            </div>
          </section>

          {/* Add New Song / Note */}
          <section className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Add New Song/Note
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Hymn Title, Scripture Reference, or Note Subject"
                value={newHymnTitle}
                onChange={(e) => setNewHymnTitle(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Author / Source"
                  value={newHymnAuthor}
                  onChange={(e) => setNewHymnAuthor(e.target.value)}
                  className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <input
                  type="text"
                  placeholder="Hymn Number, e.g. 123"
                  value={newHymnNumber}
                  onChange={(e) => setNewHymnNumber(e.target.value)}
                  className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <textarea
                placeholder="Start typing your lyrics or notes here..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                rows={4}
              ></textarea>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">
                + Add Song/Note
              </button>
            </div>
          </section>

          {/* Hymn Library */}
          <section className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-800">Hymn Library</h2>
              <div className="flex gap-2">
                <button className="px-3 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Sort by
                </button>
                <button className="px-3 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Filter
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Amazing Grace",
                  number: "100",
                  author: "John Newton",
                },
                {
                  title: "How Great Thou Art",
                  number: "120",
                  author: "Stuart K. Hine",
                },
                {
                  title: "Great Is Thy Faithfulness",
                  number: "43",
                  author: "Thomas O. Chisholm",
                },
                {
                  title: "It Is Well With My Soul",
                  number: "87",
                  author: "Horatio G. Spafford",
                },
              ].map((hymn, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 font-bold text-xs px-2 py-1 rounded mr-3">
                      #{hymn.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {hymn.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {hymn.author}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                      Add to Projection
                    </button>
                    <button className="px-4 py-2 border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="px-5 py-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                Load More Hymns
              </button>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          {/* Bot Assistant */}
          <Bot/>
          {/* Projection Themes */}
          <section className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Projection Themes
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Classic Blue", color: "bg-blue-500" },
                { name: "Serene Green", color: "bg-emerald-500" },
                { name: "Warm Sepia", color: "bg-amber-500" },
                { name: "Minimal White", color: "bg-slate-200" },
                { name: "Dark Contrast", color: "bg-slate-800" },
                { name: "Vibrant Purple", color: "bg-purple-500" },
              ].map((theme) => (
                <div
                  key={theme.name}
                  className=" bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-all duration-200"
                >
                  <div
                    className={`h-20 w-full mb-2 ${theme.color} rounded-lg`}
                  ></div>
                  <p className="text-sm text-slate-700 text-center font-medium">
                    {theme.name}
                  </p>
                  <div className="flex justify-center  flex-col gap-2 mt-2">
                    <button className="px-2 py-1 border border-slate-200 rounded-sm text-xs hover:bg-slate-100 transition-colors">
                      Preview
                    </button>
                    <button className="px-2 py-1 bg-blue-600 text-white rounded-sm text-xs hover:bg-blue-700 transition-colors">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
