import React, { useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';

const MastersPrograms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [showScholarshipsOnly, setShowScholarshipsOnly] = useState(false);

  const programs = [
    // Cyber Security Programs (Rating 4.0+, 1 year only)
    { university: "Newcastle University", course: "MSc Cyber Security", duration: "1 year", fees: 28800, rating: 4.8, distance: 280, scholarship: "Vice-Chancellor's Excellence: 50% tuition OR Vice-Chancellor's International: £7,000", scholarshipAmount: 14400, tier: "Premium" },
    { university: "University of York", course: "MSc Cyber Security", duration: "1 year", fees: 26900, rating: 4.7, distance: 200, scholarship: "None listed", scholarshipAmount: 0, tier: "Premium" },
    { university: "University of Surrey", course: "MSc Cyber Security", duration: "1 year", fees: 24500, rating: 4.6, distance: 25, scholarship: "None listed", scholarshipAmount: 0, tier: "Premium" },
    { university: "University of Liverpool", course: "MSc Cyber Security", duration: "1 year", fees: 27400, rating: 4.5, distance: 210, scholarship: "None listed", scholarshipAmount: 0, tier: "Premium" },
    { university: "Edinburgh Napier University", course: "MSc Cyber Security", duration: "1 year", fees: 17090, rating: 4.3, distance: 410, scholarship: "GlobalScholarships.com: $3,000 (≈£2,400)", scholarshipAmount: 2400, tier: "Excellent" },
    { university: "Glasgow Caledonian University", course: "Cyber Security MSc", duration: "1 year", fees: 16900, rating: 4.2, distance: 415, scholarship: "New to GCU: £3,000 (Nigerian students) + 5% early payment discount (£845)", scholarshipAmount: 3845, tier: "Excellent" },
    { university: "Nottingham Trent University", course: "MSc Cyber Security", duration: "1 year", fees: 18800, rating: 4.2, distance: 130, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "Sheffield Hallam University", course: "MSc Cyber Security", duration: "1 year", fees: 18600, rating: 4.1, distance: 165, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "University of East Anglia", course: "MSc Cyber Security", duration: "1 year", fees: 21200, rating: 4.2, distance: 120, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "Birmingham City University", course: "Cyber Security - MSc", duration: "1 year", fees: 17500, rating: 4.0, distance: 115, scholarship: "Postgraduate Merit-Based: £3,000", scholarshipAmount: 3000, tier: "Good" },
    { university: "Coventry University", course: "Cyber Security MSc", duration: "1 year", fees: 19850, rating: 4.0, distance: 95, scholarship: "None listed", scholarshipAmount: 0, tier: "Good" },
    { university: "University of Essex", course: "MSc Cyber Security", duration: "1 year", fees: 22750, rating: 4.0, distance: 70, scholarship: "None listed", scholarshipAmount: 0, tier: "Good" },
    { university: "University of Aberdeen", course: "Cybersecurity MSc", duration: "1 year", fees: 27000, rating: 4.1, distance: 550, scholarship: "None listed", scholarshipAmount: 0, tier: "Premium" },
    { university: "Heriot Watt University UK", course: "Applied Cyber Security, MSc", duration: "1 year", fees: 24048, rating: 4.1, distance: 410, scholarship: "Merit Scholarships: £500,000+ pool (contact regional manager for Nigerian students)", scholarshipAmount: 0, tier: "Excellent" },
    
    // Computing Programs (Rating 4.0+, 1 year only)
    { university: "Newcastle University", course: "Advanced Computer Science MSc", duration: "1 year", fees: 28800, rating: 4.7, distance: 280, scholarship: "Vice-Chancellor's Excellence: 50% tuition OR Vice-Chancellor's International: £7,000", scholarshipAmount: 14400, tier: "Premium" },
    { university: "Edinburgh Napier University", course: "MSc Computing", duration: "1 year", fees: 17090, rating: 4.2, distance: 410, scholarship: "GlobalScholarships.com: $3,000 (≈£2,400)", scholarshipAmount: 2400, tier: "Excellent" },
    { university: "Northumbria University", course: "Advanced Computer Science MSc", duration: "1 year", fees: 20500, rating: 4.0, distance: 280, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "Nottingham Trent University", course: "Computing Systems MSc", duration: "1 year", fees: 18800, rating: 4.1, distance: 130, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "Sheffield Hallam University", course: "MSc Computing", duration: "1 year", fees: 18600, rating: 4.0, distance: 165, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "University of East Anglia", course: "MSc Computing", duration: "1 year", fees: 21200, rating: 4.1, distance: 120, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "University of Stirling", course: "MSc Advanced Computing with AI", duration: "1 year", fees: 22900, rating: 4.0, distance: 425, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    
    // Cloud Computing (Rating 4.0+, 1 year only)
    { university: "Newcastle University", course: "Cloud Computing MSc", duration: "1 year", fees: 28800, rating: 4.6, distance: 280, scholarship: "Vice-Chancellor's Excellence: 50% tuition OR Vice-Chancellor's International: £7,000", scholarshipAmount: 14400, tier: "Premium" },
    { university: "University of Leicester", course: "Cloud Computing MSc", duration: "1 year", fees: 24975, rating: 4.1, distance: 110, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "Sheffield Hallam University", course: "MSc Computing with Cloud Technologies", duration: "1 year", fees: 18600, rating: 4.0, distance: 165, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
    { university: "Nottingham Trent University", course: "MSc Cloud and Enterprise Computing", duration: "1 year", fees: 18800, rating: 4.0, distance: 130, scholarship: "None listed", scholarshipAmount: 0, tier: "Excellent" },
  ];

  const filteredPrograms = programs.filter(p => {
    const matchesSearch = p.university.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'all' || p.course.toLowerCase().includes(filterCourse.toLowerCase());
    const matchesScholarship = !showScholarshipsOnly || p.scholarshipAmount > 0;
    return matchesSearch && matchesCourse && matchesScholarship;
  });

  const exportToCSV = () => {
    const headers = ['University', 'Course', 'Duration', 'Tuition Fees (£)', 'Rating', 'Distance (miles)', 'Scholarship Available', 'Scholarship Amount (£)', 'Net Cost (£)', 'Tier'];
    const rows = programs.map(p => [
      p.university,
      p.course,
      p.duration,
      p.fees,
      p.rating,
      p.distance,
      p.scholarship,
      p.scholarshipAmount,
      p.fees - p.scholarshipAmount,
      p.tier
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uk_masters_programs_with_scholarships.csv';
    a.click();
  };

  const scholarshipSummary = programs.filter(p => p.scholarshipAmount > 0);
  const totalScholarships = scholarshipSummary.reduce((sum, p) => sum + p.scholarshipAmount, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">UK Masters Programs Analysis</h1>
        <p className="text-gray-600 mb-4">Complete comparison with scholarship information</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">{programs.length}</div>
            <div className="text-sm text-blue-600">Total Programs</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-700">{scholarshipSummary.length}</div>
            <div className="text-sm text-green-600">With Scholarships</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-700">£{Math.round(totalScholarships).toLocaleString()}</div>
            <div className="text-sm text-purple-600">Total Scholarship Value</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">£{Math.round(totalScholarships / scholarshipSummary.length).toLocaleString()}</div>
            <div className="text-sm text-orange-600">Avg Scholarship</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search university or course..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
          >
            <option value="all">All Courses</option>
            <option value="cyber">Cyber Security</option>
            <option value="computing">Computing</option>
            <option value="cloud">Cloud</option>
            <option value="health">Health Data</option>
          </select>
          <button
            onClick={() => setShowScholarshipsOnly(!showScholarshipsOnly)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              showScholarshipsOnly 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            <Filter className="h-4 w-4" />
            Scholarships Only
          </button>
          <button
            onClick={exportToCSV}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">University</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Course</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Duration</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Fees (£)</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Rating</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Distance</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Scholarship</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Net Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPrograms.map((program, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{program.university}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{program.course}</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-600">{program.duration}</td>
                  <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">
                    £{program.fees.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ {program.rating}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-600">{program.distance} mi</td>
                  <td className="px-4 py-3 text-sm text-right">
                    {program.scholarshipAmount > 0 ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        £{program.scholarshipAmount.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-bold text-blue-700">
                    £{(program.fees - program.scholarshipAmount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Scholarship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scholarshipSummary
            .sort((a, b) => b.scholarshipAmount - a.scholarshipAmount)
            .slice(0, 10)
            .map((program, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{program.university}</h3>
                  <span className="text-lg font-bold text-green-600">£{program.scholarshipAmount.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{program.course}</p>
                <p className="text-xs text-gray-500 mb-2">{program.scholarship}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Net Cost: <span className="font-semibold">£{(program.fees - program.scholarshipAmount).toLocaleString()}</span></span>
                  <span className="text-gray-500">{program.distance} miles</span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">💡 Scholarship Notes:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Newcastle University:</strong> Best scholarship - up to 50% tuition or £7,000</li>
          <li>• <strong>Buckinghamshire New:</strong> Best combined offer - £5,500 total</li>
          <li>• <strong>Anglia Ruskin:</strong> Up to £4,000 for ARU graduates</li>
          <li>• <strong>Glasgow Caledonian:</strong> £3,000 + 5% early payment for Nigerian students</li>
          <li>• <strong>Middlesex:</strong> Chevening covers full tuition (highly competitive)</li>
          <li>• <strong>Heriot Watt:</strong> £500,000+ scholarship pool - contact regional manager</li>
        </ul>
      </div>
    </div>
  );
};

export default MastersPrograms;