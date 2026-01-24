import { useState } from 'react';
import { Dropdown } from '@src/components/dropdown/base/Dropdown';
import SearchBar from '@src/components/input/searchBar/SearchBar';
import Button from '@src/components/button/Button';
import ProductCard from '@src/components/productCard';

const options = [
  { label: '최신순', value: '1' },
  { label: '좋아요순', value: '2' },
];

export default function Test() {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-8">
        <SearchBar />
        <Dropdown
          options={options}
          value={selected}
          placeholder="최신순"
          onSelect={(value) => setSelected(value)}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=600&q=80"
            title="아이패드 미니 팝니다"
            price="500,000원"
            likeCount={240}
            isLiked={false}
            onLikeToggle={() => {}}
            clickable
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
            title="빈티지 시계"
            price="120,000원"
            likeCount={18}
            isLiked
            onLikeToggle={() => {}}
            size="sm"
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80"
            title="무선 헤드폰"
            price="89,000원"
            isLiked={false}
            likeCount={0}
            size="lg"
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=600&q=80"
            title="책상 의자"
            price="45,000원"
            likeCount={0}
            isLiked={false}
            onLikeToggle={() => {}}
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button label="로그인" enabled onClick={() => {}} />
          <Button label="로그인" enabled={false} onClick={() => {}} />
          <Button
            label="목록으로 돌아가기"
            enabled
            showBackIcon
            iconPosition="right"
            onClick={() => {}}
          />
          <Button label="상품 등록하기" enabled onClick={() => {}} />
          <Button label="등록" enabled={false} type="submit" />
          <Button label="수정 완료" enabled onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
