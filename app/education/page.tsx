import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Master of Science in Computer Science</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <p className="text-lg font-medium">University at Buffalo (SUNY)</p>
              <p className="text-sm text-gray-500">January 2024 - May 2025</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">Buffalo, NY</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Coursework - Algorithm Analysis, Deep Learning, Computer Vision and Image Processing, Information
                Retrieval
              </li>
              <li>GPA - 3.89</li>
              <li>Leadership - Secretary of Computer Science Engineering Graduate Student Association</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Technology in Computer Science and Engineering</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <p className="text-lg font-medium">Maharaja Surajmal Institute of Technology (GGSIPU)</p>
              <p className="text-sm text-gray-500">August 2016 - September 2020</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">Delhi, India</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Coursework - Web Technology, Operating Systems, Object Oriented Programming, Software Testing & QA
              </li>
              <li>GPA - 3.452</li>
              <li>Leadership - Director of Community Services at Rotaract Club of New Delhi Next</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

