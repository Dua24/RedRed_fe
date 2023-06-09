import { useState } from 'react'
import { FaHotjar } from 'react-icons/fa'
import { MdNewReleases } from 'react-icons/md'
import { RiVipCrownLine } from 'react-icons/ri'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const FilterPost = (props) => {
    const { posts, setPosts } = props
    const { isAuthenticated } = useSelector(state => state.user)
    const [classNameActive, setClassNameActive] = useState('active')
    const [nameFilter, setNameFilter] = useState('new')
    useEffect(() => {
        setNameFilter('new')
    }, [posts?.length])
    const handleFilter = (type) => {
        const handleCompare = (a, b, type) => {
            setClassNameActive('active')
            if (type === 'desc') {
                return parseFloat(b) - parseFloat(a)
            } else {
                return parseFloat(a) - parseFloat(b)

            }
        }
        if (type === 'top') {
            setNameFilter(type)
            setPosts(draft => {
                draft.sort((a, b) => handleCompare(a.num_Evaluate, b.num_Evaluate, 'desc'));
            })
        } else if (type === "hot") {
            setNameFilter(type)
            setPosts(draft => {
                draft.sort((a, b) => handleCompare(a.comments.length, b.comments.length, 'desc'));
            })
        } else if (type === "new") {
            setNameFilter(type)
            setPosts(draft => {
                draft.forEach(post => {
                    const typeTime = post.post_time.split(' ')[1]
                    const timeNum = post.post_time.split(' ')[0]
                    switch (typeTime) {
                        case "hours":
                            post['postTimeConverted'] = timeNum * 3600
                            break;
                        case "minutes":
                            post['postTimeConverted'] = timeNum * 60
                            break;
                        case "seconds":
                            post['postTimeConverted'] = timeNum
                            break; case "hours":
                        case "days":
                            post['postTimeConverted'] = timeNum * 24 * 3600
                            break; case "hours":
                    }
                })
                draft.sort((a, b) => {
                    return handleCompare(a.postTimeConverted, b.postTimeConverted, 'asc')
                });
            })
        }
    }
    return (
        <>
            {!isAuthenticated && <h4 className="title">Popular posts</h4>}
            <div className="filter_posts ">
                <div className="filter_items ">
                    <span
                        className={nameFilter === 'hot' && classNameActive || ''}
                        onClick={() => handleFilter('hot')}>
                        <FaHotjar /> Hot
                    </span>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Everywhere <BiChevronDown style={{ fontSize: '22px' }} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className="active">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <span
                        className={nameFilter === 'new' && classNameActive || ''}
                        onClick={() => handleFilter('new')}
                    >
                        <MdNewReleases /> New
                    </span>
                    <span
                        onClick={() => handleFilter('top')}
                        className={nameFilter === 'top' && classNameActive || ''}
                    ><RiVipCrownLine /> Top</span>
                </div>
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       <SlOptions />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><AiOutlineRise /> Action</Dropdown.Item>
                    </Dropdown.Menu> 
                </Dropdown> */}

                {/* <Dropdown className="layout_option">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <RxLayout style={{ fontSize: '24px' }} /> <BiChevronDown style={{ fontSize: '22px' }} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className="active"><RiLayoutRowLine /> Card</Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><TfiLayoutAccordionMerged /> Classic</Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><TfiLayoutMenuV /> Compact</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <span ></span>
            </div>
        </>

    )
}

export default FilterPost