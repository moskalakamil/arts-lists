import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Icon } from '@/assets/Icon';
import { HomeStack } from '@/navigation/Home.Stack';
import { useT } from '@/utils/useTranslation/useTranslation';
import { SearchStack } from '@/navigation/Search.Stack';
import { FavouriteStack } from '@/navigation/Favourite.Stack';

export type MainStackNavParamList = {
  HomeScreen: undefined;
  Search: undefined;
  Favourite: undefined;
};

const Tab = createBottomTabNavigator<MainStackNavParamList>();

export const useAppNavigation = useNavigation<
  NavigationProp<MainStackNavParamList>
>;

interface IconsProps {
  focused: boolean;
}

const HomeIcon = ({ focused }: IconsProps) => (
  <Icon
    name={'home'}
    className={focused ? 'stroke-[#63ABFF]' : 'stroke-black'}
  />
);

const SearchIcon = ({ focused }: IconsProps) => (
  <Icon
    name={'search'}
    className={focused ? 'stroke-[#63ABFF]' : 'stroke-black'}
  />
);

const FavouriteIcon = ({ focused }: IconsProps) => (
  <Icon
    name={'favourite'}
    className={focused ? 'stroke-[#63ABFF]' : 'stroke-black'}
  />
);

export const MainTab = () => {
  const { t } = useT();

  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 20,
          height: 65,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          paddingTop: 10,
          paddingBottom: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabel: t('home'),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: SearchIcon,
          tabBarLabel: t('search'),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteStack}
        options={{
          tabBarIcon: FavouriteIcon,
          tabBarLabel: t('favourite'),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        }}
      />
    </Tab.Navigator>
  );
};
