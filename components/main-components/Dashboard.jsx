// Components
import List from '../sub-components/List';
// ICON
import { FaCheck } from "react-icons/fa";

function Dashboard() {

    const student = [
        {
            name: "Prachot",
            ns_number: 6640202674
        },
        {
            name: "Nawin",
            ns_number: 6640202621
        },
        {
            name: "Yoda",
            ns_number: 6640201231
        }
    ]

    return (
        <div className='w-full bg-base-100'>
            <div>
                {/* Navbar */}
                <div className="navbar bg-base-200">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Dashboard</a>
                    </div>
                </div>
                {/* Dashboard */}
                <div className='p-[20px]'>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='bg-base-300 h-[200px] rounded'>
                        </div>
                        <div className='bg-base-300 h-[200px] rounded'>
                        </div>
                        <div className='bg-base-300 h-[200px] rounded'>
                        </div>
                        <div className='bg-base-300 h-[200px] rounded'>
                        </div>
                    </div>
                </div>
                {/* List Student */}
                <div className='p-[20px] pt-0'>
                    <div className="overflow-x-auto">
                        <table className='table table-fixed'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Number</th>
                                    <th>Name</th>
                                    <th>Nisit Number</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map((s, i) => (
                                    <List key={i} number={i + 1} name={s.name} ns_number={s.ns_number} status={<FaCheck className='mx-auto' />} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard