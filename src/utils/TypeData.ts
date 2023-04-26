export type Image = {
  profileName: string;
  displayName: string;
  profileUrl: string;
  pictureUrl: string;
};

export type IUser = {
  profileName: string;
  profileUrl: string;
  displayName: string;
  pictureUrl: string;
  description: string;
  siteUrl: string;
};

export type TnewsImage = {
  name: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
};
export type TNews = {
  _type: string;
  datePublished: string;
  description: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  name: string;
  url: string;
  provider: [];
};
export interface INews {
  detail: {
    _type: string;
    datePublished: string;
    description: string;
    image: {
      thumbnail: {
        contentUrl: string;
      };
    };
    name: string;
    url: string;
    provider: [];
  };
}

export type IButton = {
  onClick: () => void;
};
export type TPagination = {
  feed: [];
};
export interface IResult {
  recipe: {
    display: {
      profiles: [IUser];
    };
    seo: {
      web: {
        ["meta-tags"]: {
          title: string;
        };
      };
    };

    content: {
      reviews: {
        averageRating: number;
      };
      details: {
        attribution: {
          logo: string;
          text: string;
        };
        displayName: string;
        id: string;
        images: [ImageFood];
        name: string;
        totalTimeInSecond: number;
        rating: number;
        numberOfServings: number;
      };
    };
  };
}

export interface ICustomTypography {
  desc: string;
  descTwo?: string;
  descThree?: string;
  className?: string;
  variant?: any;
  classNameTwo?: string;
  onClick?: () => void;
}

export type TLinks = {
  name: string;
  to: string;
};

export type TNutrition = {
  ["display-name"]: string;
  ["tag-url"]: string;
};
export interface INutrition {
  nutrition: {
    ["display-name"]: string;
    ["tag-url"]: string;
  };
}

export type TName = {
  food: string;
  name: string;
  icon?: any;
};
export type IFood = {
  food: String;
  icon: any;
  name: String;
};
export type ImageFood = {
  hostedLargeUrl: string;
  resizableImageUrl: string;
};

export type IIngredients = {
  wholeLine: string;
  remainder: string;
  ingredient: string;
};

export interface IReview {
  review: {
    text: string;
    createTime: string;
    rating: number;
    profiles: [Image];
    user: {
      pictureUrl: string;
      displayName: string;
      profileName: string;
    };
  };
}

export type TReview = {
  text: string;
  createTime: string;
  rating: number;
  profiles: [Image];
  user: {
    pictureUrl: string;
    displayName: string;
    profileName: string;
  };
};
