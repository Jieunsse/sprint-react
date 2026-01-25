import { Header } from '@src/components/header';
import ProductCard from '../components/productCard';
import SearchBar from '../components/searchBar/SearchBar';
import Button from '@src/components/button/Button';
import { Dropdown } from '@src/components/dropdown';
import dropdownMobileIcon from '@src/components/dropdown/assets/dropdown_mobile.svg';
import PageNumberButton from '@src/components/button/pageNumberButton/PageNumberButton';
import { useNavigate } from 'react-router-dom';
import { useItemsPageController } from '../hooks/useItemsPageController';
import { itemsOrderOptions } from '../utils/itemsOptions';

export default function ItemsPage() {
  const {
    selected,
    searchInput,
    currentPage,
    likedIds,
    setCurrentPage,
    handleLikeToggle,
    handleSelectOrder,
    filteredItems,
    totalPages,
    pageNumbers,
    bestItemsQuery,
    itemsQuery,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handlePrevPage,
    handleNextPage,
  } = useItemsPageController();

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1220px] px-[24px]">
        <h2 className="font-['Pretendard'] text-[20px] font-bold leading-[32px] tracking-[0] align-middle text-secondary-900 mt-[24px]">
          베스트 상품
        </h2>
        <section className="grid grid-cols-1 gap-[24px] mt-[16px] md:grid-cols-2 md:justify-items-center lg:grid-cols-4 lg:justify-items-stretch">
          {bestItemsQuery.isLoading && <p className="text-gray-500">로딩 중...</p>}
          {bestItemsQuery.isError && (
            <p className="text-gray-500">베스트 상품을 불러오지 못했습니다.</p>
          )}
          {bestItemsQuery.data?.list.map((item) => (
            <ProductCard
              key={item.id}
              imageUrl={item.images?.[0] ?? ''}
              title={item.name}
              price={`${item.price.toLocaleString('ko-KR')}원`}
              likeCount={item.favoriteCount}
              isLiked={likedIds.has(item.id)}
              onLikeToggle={handleLikeToggle(item.id)}
              className="md:w-[343px] md:h-[434px] lg:w-[282px] lg:h-[378px]"
            />
          ))}
        </section>

        <section className="mt-[24px] flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-[12px]">
            <h2 className="font-['Pretendard'] text-[20px] font-bold leading-[32px] align-middle text-secondary-900">
              전체 상품
            </h2>
            <Button
              label="상품 등록하기"
              className="h-[42px] md:hidden"
              onClick={() => navigate('/additems')}
            />
          </div>
          <section className="flex w-full items-center gap-[12px] md:w-auto">
            <SearchBar
              containerClassName="w-full md:w-[325px]"
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
            />
            <Button
              label="상품 등록하기"
              className="h-[42px] hidden md:inline-flex"
              onClick={() => navigate('/additems')}
            />
            <div className="hidden md:block">
              <Dropdown
                options={itemsOrderOptions}
                value={selected}
                placeholder="최신순"
                onSelect={handleSelectOrder}
              />
            </div>
            <div className="md:hidden">
              <Dropdown
                options={itemsOrderOptions}
                value={selected}
                placeholder="최신순"
                onSelect={handleSelectOrder}
                triggerVariant="icon"
                triggerIconSrc={dropdownMobileIcon}
                triggerAriaLabel="정렬 옵션"
                menuClassName="right-0"
              />
            </div>
          </section>
        </section>
        <section className="grid grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[24px] md:grid-cols-3 lg:grid-cols-5">
          {itemsQuery.isLoading && <p className="text-gray-500">로딩 중...</p>}
          {itemsQuery.isError && <p className="text-gray-500">상품을 불러오지 못했습니다.</p>}
          {filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              size="sm"
              imageUrl={item.images?.[0] ?? ''}
              title={item.name}
              price={`${item.price.toLocaleString('ko-KR')}원`}
              likeCount={item.favoriteCount}
              isLiked={likedIds.has(item.id)}
              onLikeToggle={handleLikeToggle(item.id)}
              className="md:w-[221px] md:h-[317px] lg:w-full lg:h-auto"
            />
          ))}
        </section>
        <section className="flex justify-center gap-[8px] mt-[40px] mb-[35px] md:mt-[40px] md:mb-[72px]">
          <PageNumberButton kind="prev" disabled={currentPage === 1} onClick={handlePrevPage} />
          {pageNumbers.map((page) => (
            <PageNumberButton
              key={page}
              kind="page"
              page={page}
              isActive={page === currentPage}
              onClick={() => setCurrentPage(page)}
            />
          ))}
          <PageNumberButton
            kind="next"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          />
        </section>
      </main>
    </>
  );
}
