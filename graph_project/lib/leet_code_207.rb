# // View the full problem and run the test cases at:
# //  https://leetcode.com/problems/course-schedule/



# @param { Integer } num_courses
# @param { Integer[][] } prerequisites
# @return { Boolean }

require 'set'

def build_courses(prereqs) #prereqs is a 2d array[[1, 0], [0, 1]]
    hash = Hash.new() 

    prereqs.each do | courses |
        course, prereq = courses.map(&:to_s)

        if hash[course]
            hash[course] << prereq
        else
            hash[course] = [ prereq ]
        end

        if !hash[prereq]
            hash[prereq] = []
        end
    end

    hash
end

def can_finish(num_courses, prerequisites)
    graph = build_courses(prerequisites)
    
    total_courses = graph.length
    completed = Set.new
    eligible_course = true
    
    

    while eligible_course do
        eligible_course = false
        graph.each do |course|
            main_course, prereq = course
            every_pre_met = prereq.all? {|pre| completed.include?(pre)}

            if (!completed.include?(main_course)) && every_pre_met
                completed.add(main_course)
                eligible_course = true
            end
        end
    end
   completed.size == total_courses
end